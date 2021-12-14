import { Construction, ConstructionOutlined } from '@mui/icons-material'
import { render } from '@testing-library/react'
import React, {useState} from 'react'
import {Card, Button , Image, Icon} from 'semantic-ui-react'

export default function Contador() {
    const handleClick = () =>{
   
    }
    return (
        <div>
            <Card>
      <Card.Content>
       <h1>Counter</h1>
       <h2>0</h2>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={handleClick} > 
          <Icon name='minus'/>
          </Button> 
          <Button >
          <Icon name='plus'/>
          </Button>
        </div>
      </Card.Content>
    </Card>
        </div>
    )
}
