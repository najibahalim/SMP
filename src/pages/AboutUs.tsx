import { Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from '../styles';

export const AboutUsPage = () => {
    const classes = useStyles();
    return (
        <Container component={"div"} className={`${classes.smpContainer} ${classes.smpAboutUs}`}>
            <Typography className="heading">
                بِسمِ اللہ الرَّحمٰنِ  الرَّحِيم
            </Typography>

            <Typography color={'textSecondary'}>
                فهرست اعتداء أي أما, أخذ أعمال معاملة هو, ولم ان جورج الشتوية. ما والمعدات الإتفاقية شيء, بهيئة المسرح وتنامت كما في, ضرب مكّن جديدة السفن لم. يبق أي ومضى السادس واقتصار, مع بلا ضمنها لعملة إستيلاء. في جعل وقبل أواخر الإقتصادية, و وبلجيكا، وبالتحديد، غير. عرض تم بشرية الجنوب. إذ وقد تونس المضي لمحاكم, أخذ للأراضي واعتلاء قد, رجوعهم الفرنسي وصل عن.
                حيث ببعض ومضى قادة تم, بقعة اكتوبر الموسوعة حدى تم, معقل جديدة لتقليعة قد وفي. أم أسر بفرض الأعمال الدّفاع. الا كثيرة اوروبا بـ, لها هنا؟ وشعار المحيط عن. في لكون العسكري العالمية على. عرض هو يطول جديدة والعتاد. أن وحرمان الشتاء، حتى, بحق و غريمه واشتدّت الأوروبي.
            </Typography>
        </Container>
    )
}