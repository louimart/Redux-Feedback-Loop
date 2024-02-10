import axios from "axios";


export const getFeedback = () => {
  return axios.get('/api/feedback')
}

// POST-Submit Feedback
export const postFeedback = (feedbackData) => {
  return axios.post('/api/feedback', feedbackData);
};