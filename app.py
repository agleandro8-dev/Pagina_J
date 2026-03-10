from flask import Flask, render_template, redirect, url_for
from models.cumple_model import CumpleModel

app = Flask(__name__)

@app.route("/")
def landing():
    return render_template("landing.html")

@app.route("/principal")
def principal():
    datos = CumpleModel.obtener_datos()
    return render_template("index.html", datos=datos)

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
