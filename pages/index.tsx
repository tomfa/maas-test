import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Introduction from "../src/components/Introduction";
import {MaasQuestion, questions, Survey} from "../src/config";
import Question from "../src/components/Question";
import {useCallback, useMemo, useState} from "react";
import Result from "../src/components/Result";
import Footnote from "../src/components/Footnote";

const Home: NextPage = () => {
  const [survey, setSurvey] = useState<Survey>([])
  const answer = useCallback((q: MaasQuestion, answer: number ) => {
    setSurvey(existing => [...existing.filter(eq => eq.id !== q.id), {...q, answer }])
  }, []);
  const isCompleted = survey.length === questions.length;

  return (
    <div className={styles.container}>
      <Introduction />
      {questions.map(q => (
        <Question key={q.id} q={q} onChange={answer} />
      ))}

      {isCompleted && <Result result={survey} />}
      <Footnote result={survey} />
    </div>
  )
}

export default Home
