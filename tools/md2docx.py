#!/usr/bin/env python3
"""Markdown -> HTML -> DOCX über macOS textutil (pandoc ist auf dieser Maschine nicht installiert).

    python3 tools/md2docx.py eingabe.md ausgabe.docx

Deckt ab, was in den Projektdokumenten vorkommt: Überschriften, Absätze, Listen,
Tabellen, Fett/Kursiv/Code, Links, horizontale Linien, Blockzitate.
Liegt bewusst im Projekt und nicht im Scratchpad — dort ging es schon zweimal verloren.
"""
import html
import re
import subprocess
import sys


def inline(s):
    s = html.escape(s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2">\1</a>', s)
    s = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<i>\1</i>", s)
    s = re.sub(r'(?<!["\'>=])(https?://[^\s<)]+)', r'<a href="\1">\1</a>', s)
    return s


def convert(md):
    out, lines, i, n = [], md.split("\n"), 0, len(md.split("\n"))
    while i < n:
        st = lines[i].strip()
        if not st:
            i += 1
            continue
        if st in ("---", "***", "___"):
            out.append("<hr/>")
            i += 1
            continue
        m = re.match(r"^(#{1,6})\s+(.*)$", st)
        if m:
            lvl = len(m.group(1))
            out.append(f"<h{lvl}>{inline(m.group(2))}</h{lvl}>")
            i += 1
            continue
        # Tabelle
        if st.startswith("|") and i + 1 < n and re.match(r"^\|[\s:\-|]+\|$", lines[i + 1].strip()):
            cells = lambda row: [c.strip() for c in row.strip().strip("|").split("|")]
            head = cells(st)
            i += 2
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append(cells(lines[i]))
                i += 1
            t = ['<table border="1" cellspacing="0" cellpadding="5" style="border-collapse:collapse">']
            t.append("<tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr>")
            for r in rows:
                t.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
            t.append("</table>")
            out.append("".join(t))
            continue
        # Listen
        if re.match(r"^[-*+]\s+", st) or re.match(r"^\d+[.)]\s+", st):
            tag = "ol" if re.match(r"^\d+[.)]\s+", st) else "ul"
            items = []
            while i < n:
                m2 = re.match(r"^(?:[-*+]|\d+[.)])\s+(.*)$", lines[i].strip())
                if not m2:
                    break
                items.append(f"<li>{inline(m2.group(1))}</li>")
                i += 1
            out.append(f"<{tag}>" + "".join(items) + f"</{tag}>")
            continue
        # Blockzitat
        if st.startswith(">"):
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip().lstrip(">").strip())
                i += 1
            out.append(f'<blockquote><p>{inline(" ".join(buf))}</p></blockquote>')
            continue
        # Absatz
        buf = []
        while i < n and lines[i].strip() and not re.match(r"^(#{1,6}\s|[-*+]\s|\d+[.)]\s|\||>|---$)", lines[i].strip()):
            buf.append(lines[i].strip())
            i += 1
        if buf:
            out.append(f'<p>{inline(" ".join(buf))}</p>')

    css = ("body{font-family:'Helvetica Neue',Arial,sans-serif;font-size:11pt;line-height:1.45;color:#1c2333}"
           "h1{color:#0028a5;font-size:20pt}h2{color:#0028a5;font-size:15pt;margin-top:18pt}"
           "h3{font-size:12.5pt;margin-top:14pt}table{font-size:10pt;width:100%}"
           "th{background:#f0f3fa;text-align:left}code{font-family:Menlo,monospace;font-size:9.5pt}"
           "blockquote{margin-left:16pt;color:#39415a;font-style:italic}")
    return (f'<!DOCTYPE html><html><head><meta charset="utf-8"><style>{css}</style></head>'
            f"<body>{''.join(out)}</body></html>")


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    with open(src, encoding="utf-8") as f:
        htm = convert(f.read())
    tmp = dst + ".tmp.html"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(htm)
    subprocess.run(["textutil", "-convert", "docx", "-output", dst, tmp], check=True)
    subprocess.run(["rm", tmp], check=True)
    print(f"OK: {dst}")
