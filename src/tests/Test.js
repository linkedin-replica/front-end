/**
  Include the components you want to test in the render function with a route
*/
import React, { Component } from 'react';
import Radium from 'radium';
import ButtonsTest from './ButtonsTest';
import WrappersTest from './WrappersTest';
import TypographyTest from './TypographyTest';
import ProfileTest from './ProfileTest';
<<<<<<< HEAD
import DetailsHeaderTest from './DetailsHeaderTest';
<<<<<<< HEAD
=======
import WallTest from './WallTest';
>>>>>>> d1cf22ccab04a3b8f7d8ef53d842aa4ca17cd3fa
=======
import ConnectionsTest from './ConnectionsTest';
>>>>>>> f6eb149a73836a20a2c20f3e9006959ed724db04
import { Route } from 'react-router-dom'
import ChatTest from './ChatTest';
import RecommendedArticleTest from './RecommendedArticleTest'
import RecommendedArticlesTest from './RecommendedArticlesTest'

class Test extends Component {
  render() {
    const { match } = this.props;
    return (
      <div style={styles.base}>
        {/* route for /test/buttons */}
        <Route path={`${match.url}/buttons`} component={ButtonsTest} />

        <Route path={`${match.url}/wrappers`} component={WrappersTest} />

        <Route path={`${match.url}/typography`} component={TypographyTest} />

        <Route path={`${match.url}/profile`} component={ProfileTest} />

        <Route path={`${match.url}/details`} component={DetailsHeaderTest} />

        <Route path={`${match.url}/chat`} component={ChatTest} />

        <Route path={`${match.url}/recommendedArticle`} component={RecommendedArticleTest} />

        <Route path={`${match.url}/recommendedArticles`} component={RecommendedArticlesTest} />

        <Route path={`${match.url}/wall`} component={WallTest} />

        <Route path={`${match.url}/connections`} component={ConnectionsTest} />

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
