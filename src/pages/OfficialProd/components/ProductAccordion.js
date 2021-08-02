import React from 'react'
import '../style.scss'
import { Accordion, Card } from 'react-bootstrap'

function ProductAccordion({ item }) {
  const method = [
    {
      title: '使用方法',
      one: '抹於手腕內側脈搏跳動的地方，脈搏跳動會激發香水的味道。',
      two: '大腿內側的體溫很高加上香氣是由下而上散發的適合擦香水。',
      three: '想飄著淡淡的香味時請擦腰處，如果是用餐就抹在腰部以下。',
    },
  ]
  return (
    <>
      <Accordion className="official__accordion" defaultActiveKey="1">
        <Card>
          <div>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
              商品描述
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{item.description_zh}</Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
        <Card>
          <div>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              香氛成分
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="official__accordion-text">
                <span>前調：{item.top}</span>
                <span>中調：{item.middle}</span>
                <span>後調：{item.base}</span>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
        <Card>
          {method.map((item, index) => {
            return (
              <div key={index}>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                  {item.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="official__accordion-text">
                    <span>1. {item.one}</span>
                    <span>2. {item.two}</span>
                    <span>3. {item.three}</span>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            )
          })}
        </Card>
      </Accordion>
    </>
  )
}

export default ProductAccordion
