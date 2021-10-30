from twilio.rest import Client  # twilio plugins

# get credentials
with open('Creds.txt') as file:
    account_sid = file.readline()
    auth_token = file.readline()
    my_phone = file.readline()

# get message input
def get_message():
    message = input('Enter a message: ')
    return message

# send to number
def send_message():
    sms = get_message()
    client = Client(account_sid, auth_token) # established connection with client

    to_number = '+18179873276'
    message = client.messages.create(
                            messaging_service_sid = 'MGfd7b282ecf33709c165087bdebb470ce', 
                            body = '\n'+sms,     
                            from_ = my_phone, 
                            to = to_number
                            )
    print('to ' + number + ': [' + text + ']\nSMS_id '+ message.sid)
    print(message)
     

def main():
    send_message()

if __name__ == "__main__":
    main()
