import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';
import Router from 'next/router';
import styles from '../../styles/home.module.css';

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
});

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children, heading } = this.props
        const { fixed } = this.state

        return (
            <Media greaterThan='mobile'>
                <Visibility
                    once={ false }
                    onBottomPassed={ this.showFixedMenu }
                    onBottomPassedReverse={ this.hideFixedMenu }
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={
                            heading
                                ? {
                                    minHeight: 700,
                                    padding: '1em 0em'
                                }
                                : {}
                        }
                        vertical
                    >
                        <Menu
                            fixed={ fixed ? 'top' : null }
                            inverted={ !fixed }
                            pointing={ !fixed }
                            secondary={ !fixed }
                            size='large'
                            className={ styles.headerTop }
                        >
                            <Container>
                                <Menu.Item as='a' active>Главная</Menu.Item>
                                <Menu.Item as='a'>Поиск</Menu.Item>
                                <Menu.Item as='a'>Продажа</Menu.Item>
                                <Menu.Item as='a'>Новости</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button onClick={ () => Router.push('/sign-in') } inverted={ !fixed }>
                                        Войти
                                    </Button>
                                    <Button
                                        onClick={ () => Router.push('/sign-up') }
                                        inverted={ !fixed }
                                        primary={ fixed }
                                        style={ { marginLeft: '0.5em' } }
                                    >
                                        Регистрация
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        { heading }
                    </Segment>
                </Visibility>

                { children }
            </Media>
        )
    }
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children, heading } = this.props
        const { sidebarOpened } = this.state

        return (
            <Media as={ Sidebar.Pushable } at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={ Menu }
                        animation='overlay'
                        inverted
                        onHide={ this.handleSidebarHide }
                        vertical
                        visible={ sidebarOpened }
                    >
                        <Menu.Item as='a' active>
                            Главная
                        </Menu.Item>
                        <Menu.Item as='a'>Поиск</Menu.Item>
                        <Menu.Item as='a'>Продажа</Menu.Item>
                        <Menu.Item as='a'>Новости</Menu.Item>
                        <Menu.Item as='a'>Войти</Menu.Item>
                        <Menu.Item as='a'>Регистрация</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={ sidebarOpened }>
                        <Segment
                            inverted
                            textAlign='center'
                            style={ { minHeight: 350, padding: '1em 0em' } }
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={ this.handleToggle }>
                                        <Icon name='sidebar'/>
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Войти
                                        </Button>
                                        <Button as='a' inverted style={ { marginLeft: '0.5em' } }>
                                            Регистрация
                                        </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            { heading }
                        </Segment>

                        { children }
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}

const ResponsiveContainer = ({ children, heading }) => (
    <MediaContextProvider>
        <DesktopContainer heading={ heading }>{ children }</DesktopContainer>
        <MobileContainer heading={ heading }>{ children }</MobileContainer>
    </MediaContextProvider>
);

const PageLayout = ({ children, heading }) => (
    <ResponsiveContainer heading={ heading }>
        { children }
        <Segment inverted vertical style={ { padding: '5em 0em' } }>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={ 3 }>
                            <Header inverted as='h4' content='About'/>
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={ 3 }>
                            <Header inverted as='h4' content='Services'/>
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={ 7 }>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);

export default PageLayout;
