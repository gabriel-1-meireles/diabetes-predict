# Diabetes Prediction Web App

## Project Overview

This university project focuses on developing a web application that predicts diabetes based on user
responses to a set of questions. Utilizing a machine learning model trained on a carefully curated
dataset, this application aims to offer preliminary insights into diabetes risk factors for
educational purposes.

### Disclaimer

This tool is intended for educational and informational use only and is not a substitute for
professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or
another qualified health provider with any questions you may have regarding a medical condition.

## Dataset

The machine learning model was trained on a dataset that was meticulously cleaned and prepared to
ensure the reliability of the predictions. The dataset was sourced from
[Kaggle](https://www.kaggle.com/datasets/alexteboul/diabetes-health-indicators-dataset?select=diabetes_012_health_indicators_BRFSS2015.csv),
which is publicly available for research and development purposes.

## Machine Learning Model

The core of this project is a Decision Tree algorithm, chosen for its effectiveness in handling the
complexity of the dataset. After extensive training and validation, the model achieved an accuracy
score of approximately 0.864, indicating a high level of reliability in its predictions.

## Web Application

The web application is built using Node.js and Next.js, creating a responsive and user-friendly
interface. The application works as follows:

-   Users are prompted to answer a few questions related to diabetes risk factors.
-   The input is sent to the backend via an API.
-   The backend processes the input, executes a Python script with the user data, and utilizes the
    trained model to predict the outcome.
-   The Python script returns the prediction (0 for no diabetes, 1 for diabetes) to the backend.
-   The backend then communicates the result back to the frontend, which displays the outcome to the
    user.

### Architecture

-   **Frontend:** Next.js for a seamless user experience.
-   **Backend:** Node.js API for handling requests and responses.
-   **Machine Learning Model:** A Decision Tree algorithm trained on a pre-processed dataset.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies for both the frontend and backend.
3. Ensure you have Python installed, along with the necessary libraries for running the machine
   learning model.
4. Start the backend server.
5. Run the frontend application.
6. Navigate to the application URL in your web browser to start using the app.

## Contributing

Contributions to the project are welcome! Please refer to the contributing guidelines for more
details on how you can contribute to the improvement of this project.

## License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
