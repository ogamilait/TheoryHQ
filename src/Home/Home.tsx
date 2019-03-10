import * as React from 'react';
import injectSheet from "react-jss";

const styles = {
    title: {
        background: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    content: {
        display: 'flex',
        marginTop: 20,
    },
    block: {
        height: 100,
        background: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '50%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        "&:nth-child(odd)": {
            marginRight: 10,
        },
        "&:nth-child(even)": {
            marginLeft: 10,
        },
    }
};

interface IHome {
    classes: any
}


const Home: React.FunctionComponent<IHome> = ({ classes }) => {
    return (
        <div>
            <div className={classes.title}>Hello, Word.</div>
            <div className={classes.content}>
                <div className={classes.block}>Dolor duis deserunt et non excepteur ex adipisicing reprehenderit. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod. Ad exercitation proident laboris irure enim enim sint laborum elit mollit occaecat occaecat dolore non. Ipsum sunt elit ipsum excepteur non nisi consequat nostrud aliqua mollit velit. Pariatur eu nostrud nostrud reprehenderit sit. Incididunt ullamco cupidatat in voluptate dolor do eu.</div>
                <div className={classes.block}>Dolor duis deserunt et non excepteur ex adipisicing reprehenderit. Esse ea commodo labore sit officia non velit tempor sint eiusmod minim culpa eiusmod.</div>
            </div>
        </div>
    );
}

export default injectSheet(styles)(Home);
