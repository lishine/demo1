import React from 'react'

import style from './style'
import Divider from './Divider'
import Text from './Text'

export default () => (
    <mj-section
        background-color={style.colors.white}
        padding-top={`${style.distance}px`}
        padding-left="0px"
        padding-right="0px"
        padding-bottom={`${style.distance}px`}
    >
        <mj-column vertical-align="top" width={style.width.full}>
            <Divider />
        </mj-column>
        <mj-column vertical-align="top" width={style.width.half}>
            <Text
                size="small"
                padding-top={`${style.distance}px`}
                color={style.colors.primary}
                align="left"
            >
                inventid
                <br />
                Van Vlooswijkstraat 19b
                <br />
                3039TN Rotterdam
                <br />
            </Text>
        </mj-column>
        <mj-column vertical-align="top" width={style.width.half}>
            <Text
                size="small"
                padding-top={`${style.distance}`}
                color={style.colors.primary}
                align="left"
            >
                <a href="https://www.inventid.nl">www.inventid.nl</a>
                <br />
                <a href="mailto:support@inventid.nl">support@inventid.nl</a>
                <br />
                <a href="https://www.inventid.nl/docs/privacy-statement.pdf">
                    Privacy Statement
                </a>
            </Text>
        </mj-column>
    </mj-section>
)
