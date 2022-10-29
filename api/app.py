import time
from flask import Flask, request
from flask_mail import Mail, Message
import sys
import mdp
from flask import render_template


app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'thefrenchtouch.quotemail@gmail.com',
    "MAIL_PASSWORD": mdp.mdp  # A CACHER
}

app.config.update(mail_settings)
mail = Mail(app)


def format_mail(msg_body):
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


@app.route('/recup')
def recup_data():
    data1 = request.form.get('test_text_next')
    print(data1)
    return {'data': data1}


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
