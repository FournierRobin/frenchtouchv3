import time
from flask import Flask, request
from flask_mail import Mail, Message
import sys
import mdp


app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'thefrenchtouch.quotemail@gmail.com',
    "MAIL_PASSWORD": mdp  # A CACHER
}

app.config.update(mail_settings)
mail = Mail(app)


@app.route('/recup')
def recup_data():
    data1 = request.form.get('test_text_next')
    print(data1)
    return {'data': data1}


@app.route('/mail', methods=['POST'])
def send_mail():
    body = request.json
    with app.app_context():
        mail.send(Message(subject="Nouveau", sender=app.config.get("MAIL_USERNAME"),
                  recipients=["flusty0998@gmail.com"], body=(f"le nom : {body['part1']} et son email est : {body['part2']}")))
    return {'test': 'cest envoye'}


if __name__ == '__main__':
    app.run(debug=True)
