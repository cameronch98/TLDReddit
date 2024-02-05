from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import praw
import os

app = Flask(__name__)
cors = CORS(app)
load_dotenv()

# Create praw instance
reddit = praw.Reddit(
    client_id=os.getenv('CLIENT_ID'),
    client_secret=os.getenv('CLIENT_SECRET'),
    user_agent=os.getenv('USER_AGENT')
)

@app.route('/get-comments/<string:post_id>')
def get_comments(post_id):
    """Extract and send back comments in submission with given post_id"""
    # Logs
    print(f'Incoming request for comments on post {post_id} ...')

    # Get submission object
    submission = reddit.submission(post_id)
    
    # Initialize dict/JSON
    post_text = {
        "original_post": submission.selftext
    }

    # Extract comments and send
    submission.comments.replace_more(limit=None)
    for i, comment in enumerate(submission.comments.list()):
        post_text[f'comment_{i}'] = comment.body
    return post_text