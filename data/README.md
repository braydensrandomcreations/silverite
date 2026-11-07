# Server changelogs

Edit `changelogs.json` to publish entries. The running Silverite server reads this file through `/api/changelogs`, so changes appear after refreshing the page; no server restart is needed.

Add entries as objects in the JSON array. Use ISO dates (`YYYY-MM-DD`). Entries are sorted newest first. Only the newest entry appears initially; the page's **View old changelogs** button reveals the rest. It shows a “No older changelogs” message until there is a second entry.

```json
[
  {
    "version": "0.12.11.3.2",
    "date": "2026-11-06",
    "type": "major",
    "title": "Background options",
    "changes": [
      "Added animated background styles.",
      "Added support for a custom image background."
    ]
  }
]
```

`title` is optional. `changes` can be an array of bullet points or one string. Keep the JSON valid, including commas between entries. Future plans can be mentioned naturally alongside the related changes when useful.

Set `type` to `regular`, `hotfix`, `major`, or `games` to show a matching rank badge. Entries without a recognized type are labeled Regular update.
