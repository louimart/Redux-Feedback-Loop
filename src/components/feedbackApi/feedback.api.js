import axios from "axios";

export const postFeedback = (feedbackData) => {
  return axios.post('/api/feedback', feedbackData);
};

export const getFeedback = () => {
  return axios.get('/api/feedback')
}