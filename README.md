## RoadMap
(Only works on Python3.5 and above)

Organize your roadmaps .

## Features
* Learning mindmaps.
* Hackernews feeds for things you are learning.
* IPython notebook support(for notes).
For more information check the ```ChangeLog.md``` file.

## Installation

**production:**

```
   docker-compose up -d
```
**development:**
```
  cd app
  pip install -r requirements.txt
  python -m sanic main.py --workers=4
```

Open ```http://localhost:8080``` in your browser.

## Made with

* Sanic
* sqlite3

## LICENSE
MIT
