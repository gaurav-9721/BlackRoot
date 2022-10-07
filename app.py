from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return render_template('index.html')


if __name__ == '__main__':
    app.run()


@app.route('/game', methods=['GET', 'POST'])
def launch_game():
    if request.method == 'POST':
        return redirect(url_for('index'))
    return render_template('Game.html')