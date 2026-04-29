import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

# ══════════════════════════════════════════════════════════════════════
# VAHANSETU — SECURE MESSAGING ENGINE v1.0
# ──────────────────────────────────────────────────────────────────────
# Note: For production, set MAIL_USER and MAIL_PASS (Gmail App Password)
# in your environment variables.
# ══════════════════════════════════════════════════════════════════════

MAIL_USER = os.environ.get('MAIL_USER', 'vahansetu.official@gmail.com')
MAIL_PASS = os.environ.get('MAIL_PASS', '') 

def send_vahan_email(to_email, subject, title, message, action_text="Visit Dashboard", action_url="http://127.0.0.1:5000/map"):
    if not MAIL_PASS:
        print(f"📡 [SIMULATION] Email to {to_email}: {subject}")
        return False

    html_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #04060f; color: #ffffff; padding: 20px;">
        <h1 style="color: #00f2ff;">{title}</h1>
        <p>{message}</p>
        <a href="{action_url}" style="background-color: #00f2ff; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px;">{action_text}</a>
    </body>
    </html>
    """

    msg = MIMEMultipart()
    msg['From'] = f"VahanSetu HQ <{MAIL_USER}>"
    msg['To'] = to_email
    msg['Subject'] = subject
    msg.attach(MIMEText(html_content, 'html'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(MAIL_USER, MAIL_PASS)
        server.send_message(msg)
        server.quit()
        return True
    except: return False
