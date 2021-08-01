import React from 'react'
import '../style.scss'
import { Accordion, Card } from 'react-bootstrap'

function ProductAccordion() {
  const description = [
    {
      title: '商品描述',
      description:
        '調香師以雨後的森林作為發想，採用了大量的草木元素，清新脫俗的香氣宛如置身於幽靜的森林一般。前調的蘿勒和柑橘營造出清新香氣，中調加入檀木帶出自然芬芳，後調則以帶有獨特藥草香氣的廣藿香為底打造溫潤迷人的氣息。淡淡的茉莉花香為木質芬芳帶來了一份甜淡的香氣，適合喜歡靜靜享受一人時光的妳。',
    },
  ]
  const fragrance = [
    {
      title: '香氛成分',
      top: '前調：乳香、薄荷、丁香',
      mid: '中調：金萱、烏龍',
      base: '後調：樺木',
    },
  ]
  const method = [
    {
      title: '使用方法',
      one: '抹於手腕內側脈搏跳動的地方，脈搏跳動會激發香水的味道。',
      two: '大腿內側的體溫很高，加上香氣是由下而上散發的，很適合擦香水。',
      three: '想飄著淡淡的香味時請擦腰處，如果是用餐，就抹在腰部以下。',
    },
  ]
  return (
    <>
      <Accordion className="official__accordion" defaultActiveKey="1">
        <Card>
          {description.map((item, index) => {
            return (
              <div key={index}>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  {item.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{item.description}</Card.Body>
                </Accordion.Collapse>
              </div>
            )
          })}
        </Card>
        <Card>
          {fragrance.map((item, index) => {
            return (
              <div key={index}>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  {item.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="official__accordion-text">
                    <span>{item.top}</span>
                    <span>{item.mid}</span>
                    <span>{item.base}</span>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
            )
          })}
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
                    <span>{item.one}</span>
                    <span>{item.two}</span>
                    <span>{item.three}</span>
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
