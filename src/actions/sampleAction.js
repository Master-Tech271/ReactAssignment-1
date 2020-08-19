const sampleAction = () => (dispatch) => {
  dispatch({
    type: 'SAMPLE_ACTION',
    payload: 'result_of_sample_action',
  });
};

export default sampleAction;
