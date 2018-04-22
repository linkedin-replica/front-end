/**
  Include the components you want to test in the render function with a route
*/
import React, { Component } from 'react';
import Radium from 'radium';
import ButtonsTest from './ButtonsTest';
import WrappersTest from './WrappersTest';
import CompanyTest from './CompanyTest';
import TypographyTest from './TypographyTest';
import ProfileTest from './ProfileTest';
import DetailsHeaderTest from './DetailsHeaderTest';

// import WallTest from './WallTest';
import ConnectionsTest from './ConnectionsTest';
import LoginContainerTest from './LoginContainerTest';
import LoginTest from './LoginTest';
import RegistrationContainerTest from './RegistrationContainerTest';
import { Route } from 'react-router-dom'
import ChatTest from './ChatTest';
import RecommendedArticleTest from './RecommendedArticleTest'
import RecommendedArticlesTest from './RecommendedArticlesTest'
import JobCardTest from './JobCardTest'
import ModalTest from './ModalTest';

class Test extends Component {
  render() {
    const { match } = this.props;
    return (
      <div style={styles.base}>
        {/* route for /test/buttons */}
        <Route path={`${match.url}/buttons`} component={ButtonsTest} />

        <Route path={`${match.url}/wrappers`} component={WrappersTest} />

        <Route path={`${match.url}/company`} component={CompanyTest} />

        <Route path={`${match.url}/typography`} component={TypographyTest} />

        <Route path={`${match.url}/profile`} component={ProfileTest} />

        <Route path={`${match.url}/details`} component={DetailsHeaderTest} />

        <Route path={`${match.url}/chat`} component={ChatTest} />

        <Route path={`${match.url}/recommendedArticle`} component={RecommendedArticleTest} />

        <Route path={`${match.url}/recommendedArticles`} component={RecommendedArticlesTest} />

        {/* <Route path={`${match.url}/wall`} component={WallTest} /> */}

        <Route path={`${match.url}/connections`} component={ConnectionsTest} />

        <Route path={`${match.url}/JobCard`} component={JobCardTest} />
        <Route path={`${match.url}/applicant`} component={CompanyTest} />
        <Route path={`${match.url}/login`} component={LoginContainerTest} />
        {/* <Route path={`${match.url}/login`} component={LoginTest} /> */}
        <Route path={`${match.url}/signup`} component={RegistrationContainerTest} />
        <Route path={`${match.url}/modal`} component={ModalTest} />
        {/* 

       
    <Route path={`${match.url}/recommendedArticles`} component={RecommendedArticlesTest} />
        {/*

        Add a new route to test your component in this way
        <Route path={`${match.url}/define route name here`} component={imported component to test} /> */
        }
      </div>
    );
  }
}

const styles = {
  base: {
  }
}

Test = Radium(Test);
export default Test;
