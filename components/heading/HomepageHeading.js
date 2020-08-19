import { Button, Container, Header, Icon } from "semantic-ui-react";

const HomepageHeading = () => (
    <Container text>
        <Header
            as='h1'
            content='Auto Zone'
            inverted
            style={ {
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
            } }
        />
        <Header
            as='h2'
            content='Покупайте и продавайте авто без ограничений'
            inverted
            style={ {
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
                marginBottom: '1em',
            } }
        />
        <Button primary size='huge'>
            <Icon name='search'/>
            Поиск
        </Button>
    </Container>
);

export default HomepageHeading;
