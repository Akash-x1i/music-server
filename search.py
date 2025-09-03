import sys
from googlesearch import search

def main():
    if len(sys.argv) < 2:
        print("Usage: python yt_search.py <search query>")
        return

    query = " ".join(sys.argv[1:])  # Join arguments into a single query
    query += " site:youtube.com"
    # print(query)
    results = list(search(query, num_results=2))
    if not results:
        return 10
    youtube_url = results[1]
    print(youtube_url)

if __name__ == "__main__":
    main()
