import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bucketActions from '../../actions/bucketActions';
import styled from 'styled-components';

class BucketList extends Component {

  componentDidMount() {
    this.props.loadBuckets();
  }

  render() {
    const { buckets } = this.props;

    return (
      <div>
        {!!buckets && Object.keys(buckets).map(bucket => (
          <div>{bucket}</div>
        ))}
        <button onClick= {() => this.props.createBucket('mybucket2')}>Create Bucket</button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    buckets: state.buckets
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadBuckets: () => dispatch(bucketActions.loadBuckets()),
    createBucket: (name) => dispatch(bucketActions.createBucket(name)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BucketList);