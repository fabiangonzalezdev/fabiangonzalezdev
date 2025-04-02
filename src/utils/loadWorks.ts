import { WorkData } from "../types/Work";

export const loadWorks = async (): Promise<WorkData[]> => {
  const indexRes = await fetch("/markdown/works/index.json");
  const filenames: string[] = await indexRes.json();

  const works: WorkData[] = [];

  for (const name of filenames) {
    const raw = await fetch(`/markdown/works/${name}`).then((res) => res.text());

    const data: Partial<WorkData> = {};
    const lines = raw.split("\n");
    let contentStarted = false;
    let contentLines: string[] = [];

    for (const line of lines) {
      if (line.startsWith("::title::")) {
        data.title = line.replace("::title::", "").trim();
      } else if (line.startsWith("::thumbnail::")) {
        data.thumbnail = line.replace("::thumbnail::", "").trim();
      } else if (line.startsWith("::tags::")) {
        const tags = line.replace("::tags::", "").trim();
        data.tags = tags.split(",").map((t) => t.trim());
      } else if (line.startsWith("::slug::")) {
        data.slug = line.replace("::slug::", "").trim();
      } else {
        contentStarted = true;
      }

      if (contentStarted) {
        contentLines.push(line);
      }
    }

    data.content = contentLines.join("\n").trim();

    if (data.title && data.slug && data.content && data.thumbnail && data.tags) {
      works.push(data as WorkData);
    }
  }

  return works;
};
