# Rocket-Elevators-Mobile-React-Native

In this repository you will find a mobile application so that Rocket Elevators employees can access and see all the elevators that are not operating. There is also a page where they can change the status of the elevators.
Create the App
To develop this application, we are going to use React-Native Expo. In visual studio code you will open the terminal or if you prefer you can use another terminal and enter the file where you want to save the project. Then, you are going to execute the commands that are mentioned in the following tutorial: https://docs.expo.dev/tutorial/create-your-first-app/

## Start App
To view the application from your cell phone, you must run your app and run the command (npm start) in the terminal. Then you must install Expo Go on your cell phone and using the barcode that appears on the terminal you can access your app.
In this project I used React Native Elements which is a styling library (https://reactnativeelements.com/docs/2.3.2/getting_started#step-1-install-react-native-elements). I also installed react-native-vector-icons (https://reactnativeelements.com/docs/2.3.2/getting_started).

## Starting a local web service
ngrok is the fastest way to host your service on the Internet. ngrok gives you a secure way to access your local service from anywhere in the world. To install it and learn how to use it, follow the documentation: https://ngrok.com/download

To connect to the rest api using ngrok, in the powershell terminal we access our api file and use the following command: dotnet run --urls=http://0.0.0.0:8081
![image](https://user-images.githubusercontent.com/113923422/211121225-7723bb98-3484-414d-a8d6-b3a1979f7267.png)

Start ngrok by running the following command : ngrok http 8081 (In my case I use localhost 8081 but you can use whatever you want).

The url that is given in the red square is the one that you must put in your code to connect.

![image](https://user-images.githubusercontent.com/113923422/211121683-994abb1b-98ae-4c41-8279-7ae2dceed14c.png)

That url expires in about 2 hours so you should check and ask for a new one.

 
## Connecting to the Rest Api
To connect to the Rest API and make requests, I used the Axios library: https://www.nicesnippets.com/blog/how-to-use-axios-get-request-in-react-native

![image](https://user-images.githubusercontent.com/113923422/211120531-994d2c30-9f9d-461e-91ad-34428087861e.png)

## Create FlatList
To show the elevators that are not in operation I have used a FlatList.To show the elevators that are not in operation I have used a FlatList. For that I followed     the following example: https://snack.expo.dev/Eb7BsJzCA

 
## Testing the Rest API with Postman 
To test the new routes of the REST API, create a collection and create an endpoint with the corresponding http verb.
As we are using ngrok it is important to place the http that ngrok provides us.






