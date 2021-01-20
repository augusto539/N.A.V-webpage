from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def landing():
   return render_template('index.html')

@app.route('/models')
def models():
   return render_template('models.html')

@app.route('/cart')
def cart():
   return("this is the nav shopping card")


if __name__ == "__main__":
    app.run(debug=True, port=4000)