from flask import Flask

app = Flask(__name__)

@app.route('/get-comments/<string:post_id>')
def get_comments(post_id):
    return