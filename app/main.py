"""main.py"""
import os
from sanic import Sanic
from sanic.response import html
from sanic_compress import Compress
from jinja2 import Environment, PackageLoader

APP = Sanic("Roadmap")
JINJA = Environment(loader=PackageLoader('main', 'templates'))
Compress(APP)
APP.static('/static', os.path.join(os.path.dirname(__file__), 'build'))
APP.config['COMPRESS_LEVEL'] = 9

@APP.route("/")
async def test(request):
    """first route"""
    return APP.render_template('index.html')

@APP.listener('before_server_start')
async def bind_render_env(app, loop):
    """bind jinja2 env with app"""
    app.jinja2 = JINJA
    def inner(template, **kwargs):
        """inner function to render template"""
        _html = app.jinja2.get_template(template)
        _content = _html.render(**kwargs)
        return html(_content)
    app.render_template = inner

