from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string, get_template
from django.shortcuts import render

class SendEmailNotification():

    def __init__(self, recipient, sender):
        self.recipient = recipient
        self.sender = sender


    def send_email(self):
        settings.configure()
        # body = render_to_string('body_template.html', {'sender': self.sender})
        # subject = render_to_string('subject_template.html')
        email = EmailMessage(
            'marian',
            'gay',
            settings.EMAIL_HOST_USER,
            [self.recipient]
        )
        email.fail_silently = False
        email.send()

email = SendEmailNotification('umbook.app@gmail.com', 'APROK ASHE')
email.send_email()