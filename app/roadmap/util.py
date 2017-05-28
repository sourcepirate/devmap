"""utilities"""

import aiohttp
import asyncio

DEFAULT_HEADERS = {'User-Agent': 'Mozilla/5.0'}
HACKER_NEWS_API = "https://hn.algolia.com/api/v1/search"


async def fetch(url="", headers=DEFAULT_HEADERS, params={}, payload={}, method="GET", loop=None):
    """fetch content from the url"""
    if not url:
        return
    async with aiohttp.ClientSession(loop=loop, headers=headers) as session:
        _method = getattr(session, method.lower())
        async with _method(url, params=params, data=payload) as resp:
            return await resp.json()


async def hacker_news_feeds(*args):
    """get the latest news feeds for the list of tags"""
    params = [{"query": arg} for arg in args]
    coroutines = [fetch(url=HACKER_NEWS_API, params=qry) for qry in params]
    results = await asyncio.gather(*coroutines)
    return results