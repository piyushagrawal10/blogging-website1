import React from 'react';
import { Card } from 'semantic-ui-react';


class BlogCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
            <Card.Content header={this.props.blog.title} />
            <Card.Content description={this.props.blog.description} />
            <Card.Content extra>
                { this.props.blog.title }
            </Card.Content>
            </Card>
        );
    }
}

export default BlogCard