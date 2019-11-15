import React from 'react';
import fire from 'firebase';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column width={12}>
                <Container text>
            { this.props.blogs.map( (blog) => (
                <BlogCard key={blog.id} blog={blog} />
            )) }
            </Container>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Container textAlign='center' >
                    { this.props.blogs.map( (blog) => (
                        <Link to={`/${blog.title}`} >
                            <Header color='olive' >{ blog.title }</Header>
                        </Link>
            )) }
                    </Container>
                </Grid.Column>

            </Grid.Row>
            
            
            </Grid>
        );
    }

    
}

export default Home