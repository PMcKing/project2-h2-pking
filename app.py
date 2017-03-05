import os
import flask
import flask_socketio
import requests


app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)

all_messages = []
connected_users = []
LoggedIn = False #used to decide if log in page or chat is displayer

@app.route('/')
def hello():
    return flask.render_template('index.html')

@socketio.on('connect')
def on_connect():
    print 'Someone connected!'
    

@socketio.on('disconnect')
def on_disconnect():
    print 'Someone disconnected!'


@socketio.on('new number')
def on_new_number(data):

    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['facebook_user_token'])
    json = response.json()

    all_messages.append({
        'name': json['name'],
        'picture': json['picture']['data']['url'],
        'number': data['number']
    })

    socketio.emit('all messages', {
        'numbers': all_messages
    })
    
@socketio.on('new user')
def on_new_user(data):
    response = requests.get('https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=' + data['facebook_user_token'])
    json = response.json() 
    
  
    connected_users.append({
        'name': json['name'],
        'picture': json['picture']['data']['url']
    })
   
    print(connected_users);
    socketio.emit('all users', {
        'users': connected_users
    })
    
    LoggedIn = True
    socketio.emit('Logged In', {
        'LoggedIn': LoggedIn
    })
    
    
    
if __name__ == '__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )

