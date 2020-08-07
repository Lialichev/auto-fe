import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Grid, Icon, Input, Segment, Select } from "semantic-ui-react";
import get from 'lodash/get';
import styles from "../../styles/home.module.css";

const brand = [
  { key: 'Audi', text: 'Audi', value: 'Audi' },
  { key: 'BMW', text: 'BMW', value: 'BMW' },
  { key: 'Chevrolet', text: 'Chevrolet', value: 'Chevrolet' },
  { key: 'Daewoo', text: 'Daewoo', value: 'Daewoo' },
  { key: 'Ford', text: 'Ford', value: 'Ford' },
  { key: 'Honda', text: 'Honda', value: 'Honda' },
  { key: 'Hyundai', text: 'Hyundai', value: 'Hyundai' },
  { key: 'Kia', text: 'Kia', value: 'Kia' },
  { key: 'Mercedes-Benz', text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
  { key: 'Mitsubishi', text: 'Mitsubishi', value: 'Mitsubishi' },
  { key: 'Nissan', text: 'Nissan', value: 'Nissan' },
  { key: 'Opel', text: 'Opel', value: 'Opel' },
  { key: 'Peugeot', text: 'Peugeot', value: 'Peugeot' },
  { key: 'Renault', text: 'Renault', value: 'Renault' },
  { key: 'Skoda', text: 'Skoda', value: 'Skoda' },
  { key: 'Toyota', text: 'Toyota', value: 'Toyota' },
  { key: 'Volkswagen', text: 'Volkswagen', value: 'Volkswagen' },
  { key: 'vaz', text: 'ВАЗ', value: 'vaz' },
  { key: 'zaz', text: 'ЗАЗ', value: 'zaz' },
]

const region = [
  { key: '0', text: 'Киев', value: '0' },
  { key: '1', text: 'Винница', value: '1' },
  { key: '2', text: 'Днепр (Днепропетровск)', value: '2' },
  { key: '3', text: 'Донецкая обл.', value: '3' },
  { key: '4', text: 'Житомир', value: '4' },
  { key: '5', text: 'Запорожье', value: '5' },
  { key: '6', text: 'Ивано-Франковск', value: '6' },
  { key: '7', text: 'Кропивницкий (Кировоград)', value: '7' },
  { key: '8', text: 'Луганская обл.', value: '8' },
  { key: '9', text: 'Луцк', value: '9' },
  { key: '10', text: 'Львов', value: '10' },
  { key: '11', text: 'Николаев', value: '11' },
  { key: '12', text: 'Одесса', value: '12' },
  { key: '13', text: 'Полтава', value: '13' },
  { key: '14', text: 'Ровно', value: '14' },
  { key: '15', text: 'Сумы', value: '15' },
  { key: '16', text: 'Тернополь', value: '16' },
  { key: '17', text: 'Ужгород', value: '17' },
  { key: '18', text: 'Харьков', value: '18' },
  { key: '19', text: 'Херсон', value: '19' },
  { key: '20', text: 'Хмельницкий', value: '20' },
  { key: '21', text: 'Черкассы', value: '21' },
  { key: '22', text: 'Чернигов', value: '22' },
  { key: '23', text: 'Черновцы', value: '23' },
]

export default function SearchFilter({ categories }) {
  const [ state, setState ] = useState({
    category: '',
  });

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      category: get(categories, '[0]._id')
    }))
  }, []);

  const handleChange = (e, { name, value }) => setState(prevState => ({
    ...prevState,
    [name]: value
  }));

  return (
    <Segment vertical style={ { padding: '5em 0em' } }>
      <Container>
        <Segment inverted>
          <Form inverted>
            <Grid columns={ 3 }>
              <Grid.Row>
                <Grid.Column>
                  <Form.Select
                    fluid
                    label='Тип транспорта'
                    options={ categories.map(({ name, _id }) => ({ text: name, value: _id })) }
                    clearable={true}
                    value={ state.category }
                    onChange={ handleChange }
                    name="category"
                    placeholder='Тип транспорта'
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Field
                    control={ Select }
                    options={ brand }
                    clearable={true}
                    label={ { children: 'Марка', htmlFor: 'form-select-control-brand' } }
                    placeholder='Марка'
                    search
                    searchInput={ { id: 'form-select-control-brand' } }
                    noResultsMessage="Результатов не найдено"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Field
                    control={ Select }
                    options={ brand }
                    clearable={true}
                    label={ { children: 'Модель', htmlFor: 'form-select-control-model' } }
                    placeholder='Модель'
                    search
                    searchInput={ { id: 'form-select-control-model' } }
                    noResultsMessage="Результатов не найдено"
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Form.Field
                    control={ Select }
                    options={ region }
                    clearable={true}
                    label={ { children: 'Регион', htmlFor: 'form-select-control-region' } }
                    placeholder='Регион'
                    search
                    searchInput={ { id: 'form-select-control-region' } }
                    noResultsMessage="Результатов не найдено"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                    <Form.Select
                      fluid
                      clearable={true}
                      label='Год'
                      options={ new Array(120).fill('').map((item, i) => {
                        const newItem = 2020 - i;

                        return { key: newItem, text: newItem, value: newItem };
                      }) }
                      placeholder='от'
                    />
                    <Form.Select
                      className={ styles.hideLabel }
                      fluid
                      clearable={true}
                      label='Год'
                      options={ new Array(120).fill('').map((item, i) => {
                        const newItem = 2020 - i;

                        return { key: newItem, text: newItem, value: newItem };
                      }) }
                      placeholder='до'
                    />
                  </Form.Group>
                </Grid.Column>
                <Grid.Column>
                  <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                    <Form.Field>
                      <label>Цена</label>
                      <Input
                        label='$'
                        clearable="true"
                        type="number"
                        placeholder='от'
                        fluid
                      />
                    </Form.Field>
                    <Form.Field>
                      <label style={ { color: 'transparent' } }>Цена</label>
                      <Input
                        label='$'
                        placeholder='до'
                        type="number"
                        fluid
                      />
                    </Form.Field>
                  </Form.Group>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={ 2 }>
                <Grid.Column>
                  <Button animated primary type='submit'>
                    <Button.Content visible>Поиск</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right'/>
                    </Button.Content>
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Button basic inverted floated="right">
                    Расширенный поиск
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Segment>
      </Container>
    </Segment>
  )
};
