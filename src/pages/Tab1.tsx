import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [result, setResultat] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const seConnecter = () => {
    setResultat(null);
    setLoading(true);
    fetch("https://rci.burvalgroup.com/backend/public/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password,
      }),
    })
      .then((r) => r.json())
      .then((e) => {
        setResultat(JSON.stringify(e));
      })
      .catch((e) => {
        setResultat(JSON.stringify(e));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          name="username"
          placeholder="Identifiant"
          onIonChange={(e) => {
            setUsername((e.target.value || "") as string);
          }}
        />
        <IonInput
          name="password"
          placeholder="Mot de passe"
          onIonChange={(e) => {
            setPassword((e.target.value || "") as string);
          }}
        />
        <IonButton onClick={seConnecter}>
          {loading ? "En cours ..." : "Se connecter"}
        </IonButton>
        <div>{result}</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
