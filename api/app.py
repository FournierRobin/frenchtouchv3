import time
from flask import Flask, request
from flask_mail import Mail, Message
import sys
import mdp
from flask import render_template
import os


app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": os.environ['server_smtp'],
    "MAIL_PORT": os.environ['server_port'],
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.environ['mail_username'],
    "MAIL_PASSWORD": os.environ['mail_mdp']  # A CACHER
}

app.config.update(mail_settings)
mail = Mail(app)


def format_mail(msg_body):
    addPhotos = ''
    if msg_body['addPhotos'] and (msg_body['typeOfServices'] == 'Photos And/Or Videos'):
        addPhotos = "No"
    elif msg_body['addPhotos']:
        addPhotos = "Yes"
    else:
        addPhotos = "No"

    html = f"""\
    <html>
    <head></head>
    <body>
        <h3>You have a new mail from {msg_body['familyName']}</h3><br>
        <h3>Message Details:</h3>
        <p><b>Full name : </b>{msg_body['familyName']}</p>
        <p><b>Email : </b>{msg_body['email']}</p>
        <p><b>Phone number : </b>{msg_body['phoneNumber']}</p>
        <p><b>Type of service : </b>{msg_body['typeOfServices']}</p>
        <p><b>With Photos/Videos : </b>{addPhotos}</p>
        <p><b>Job : </b>{msg_body['jobList']}</p>
        <p><b>Property Address : </b>{msg_body['propertyAdress']}</p>
        <p><b>Estimated List Price : </b>{msg_body['estimatedListPrice']} $</p>
        <p><b>Approximate Square Footage of the Home : </b>{msg_body['approximateSqftHome']} sqft</p>
        <p><b>Timeline To Have Project/Staging Completed : </b>{msg_body['timelineDeadline']}</p>
        <p><b>More About Your Project : </b>{msg_body['moreAboutProject']}</p>
    </body>
    </html>
    """
    return html


def format_quickmail(msg_body):
    html = f"""\
    <html>
    <head></head>
    <body>
        <h3>You have a new quick message from {msg_body['email']}</h3><br>
        <p><b>Message : </b>{msg_body['message']}</p>
    </body>
    </html>
    """
    return html


@app.route('/quickmail', methods=['POST'])
def send_quickmail():
    body = request.json
    mail_content = format_quickmail(body)
    with app.app_context():
        msg = Message(subject="New Quick Message Mail", sender=app.config.get("MAIL_USERNAME"),
                      recipients=["flusty0998@gmail.com"])
        msg.html = mail_content
        mail.send(msg)
    return {'test': 'cest envoye'}


@app.route('/mail', methods=['POST'])
def send_mail():
    body = request.json
    mail_content = format_mail(body)
    with app.app_context():
        msg = Message(subject="New Quote Mail", sender=app.config.get("MAIL_USERNAME"),
                      recipients=["flusty0998@gmail.com"])
        msg.html = mail_content
        mail.send(msg)
    return {'test': 'cest envoye'}


if __name__ == '__main__':
    app.run(debug=True)
