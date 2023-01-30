import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import { StyledPageButton } from "../../../styles/Button";
import { StyledForm } from "./style";
import { Loading } from "../loadingInfo";

export const Form = ({ displayPersonalData, selectedPlan, myForm }) => {
  const anamnese = useRef(null);
  const [anamneseDisplay, setAnamneseDisplay] = useState(false);
  // const [pagamentoDisplay, setPagamentoDisplay] = useState(false);
  const [loadingDisplay, setLoadingDisplay] = useState(false);

  const sendToPayment = () => {

    if (selectedPlan === "anual") {
      window.location.replace(
        "https://www.mercadopago.com.br/checkout/v1/payment/redirect/aa715b8a-236d-4f78-bc03-ed60d4e11c72/express/?source=link&preference-id=532061789-35d2c968-4939-4afd-8463-e964faefc860&router-request-id=312546e4-5027-41f4-8fc2-2c169e01274b&p=bd6ffd5e7fbf2c76a4044154196d384b"
      );
    } else if (selectedPlan === "trimestral") {
      window.location.replace(
        "https://www.mercadopago.com.br/checkout/v1/payment/redirect/5ffa6178-be11-42a7-8c69-fe3a15ee63fc/express/?source=link&preference-id=532061789-29cce5be-74f5-4996-a195-c93c086e9e6a&router-request-id=8299bc73-7285-4273-9a52-1801ee18200a&p=bd6ffd5e7fbf2c76a4044154196d384b"
      );
    } else if (selectedPlan === "mensal") {
      window.location.replace(
        "https://www.mercadopago.com.br/checkout/v1/payment/redirect/2217d763-dcea-44e6-aab6-55f931f670c3/express/?router-request-id=6963109a-bb49-49e1-a35a-870eb45cc960&source=link&preference-id=532061789-544b684a-734f-458f-b356-a5f780d312a4&p=bd6ffd5e7fbf2c76a4044154196d384b"
      );
    }
  };

  const formSchema = yup.object().shape({
    Nome: yup.string().required("O preenchimento do nome é obrigatório."),
    DataNascimento: yup
      .string()
      .required("O preenchimento da data de nascimento é obrigatório."),
    Email: yup
      .string()
      .required("O preenchimento do email é obrigatório.")
      .email("Digite um email válido"),
    EmailConfirm: yup
      .string()
      .required("A confirmação do email é obrigatória.")
      .oneOf([yup.ref("Email"), null], "Os emails devem ser iguais"),
    Telefone: yup
      .string()
      .required("O preenchimento do telefone é obrigatório."),
    Whatsapp: yup.string(),
    Objetivo: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const submitFunction = async (data) => {
    setLoadingDisplay(true);

    const emailPArams = {
      ...data,
      anamnese: anamneseDisplay,
      plano: selectedPlan,
    };

    try {
      const result = await emailjs.send(
        "service_mdccw6h",
        "template_5gd1jlp",
        emailPArams,
        "0T7hEAqC3nvcNVSqO"
      );

      if (result.text) {
        console.log(result.text);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        sendToPayment()
        // setLoadingDisplay(false);
      }, 3000);
    }

  };

  return (
    <StyledForm
      viewPersonalData={displayPersonalData}
      viewAnamnese={anamneseDisplay}
      // viewPagamento={pagamentoDisplay}
      ref={myForm}
    >
      {loadingDisplay && <Loading />}
      <form onSubmit={handleSubmit(submitFunction)}>
        <div className="personalData">
          <h3>Dados Pessoais</h3>
          <input type="text" placeholder="Nome" {...register("Nome")} />
          {errors.Nome && (
            <span className="errorMsg">{errors.Nome.message}</span>
          )}
          <span className="birthday" >Data de Nascimento</span>
          <input
            type="date"
            placeholder="Data de Nascimento"
            {...register("DataNascimento")}
          />
          {errors.DataNascimento && (
            <span className="errorMsg">{errors.DataNascimento.message}</span>
          )}
          <input type="text" placeholder="Email" {...register("Email")} />
          {errors.Email && (
            <span className="errorMsg">{errors.Email.message}</span>
          )}
          <input
            type="text"
            placeholder="Confirme seu Email"
            {...register("EmailConfirm")}
          />
          {errors.EmailConfirm && (
            <span className="errorMsg">{errors.EmailConfirm.message}</span>
          )}
          <InputMask
            type="text"
            mask="(99) 99999-9999"
            placeholder="Telefone para contato"
            {...register("Telefone")}
          />
          {errors.Telefone && (
            <span className="errorMsg">{errors.Telefone.message}</span>
          )}
          <label htmlFor="">Este telefone é WhatsApp?</label>
          <select name="Whatsapp" id="" {...register("Whatsapp")}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
          <label htmlFor="">Qual é o seu objetivo?</label>
          <select name="Objetivo" id="" {...register("Objetivo")}>
            <option value="Ganho de Massa Muscular">
              Ganho de Massa Muscular
            </option>
            <option value="Perda de gordura">Perda de Gordura</option>
            <option value="Condicionamento físico">
              Condicionamento Físico
            </option>
          </select>
          <p>
            Você pode optar por preencher o formulário de anamnese agora ou
            posteriormente
          </p>
          <div className="PDButtons">
            <StyledPageButton
              onClick={(e) => {
                e.preventDefault();
                setAnamneseDisplay(true);
                setTimeout(() => {
                  anamnese.current.scrollIntoView();

                }, 50)
              }}
            >
              FAZER ANAMNESE AGORA
            </StyledPageButton>
            <StyledPageButton type="submit">
              IR DIRETO PARA O PAGAMENTO
            </StyledPageButton>
          </div>
        </div>
        <div className="anamnese" ref={anamnese} >
          <h3>Anamnese</h3>
          <input
            type="text"
            pattern="\d*"
            placeholder="Peso (Kg)"
            {...register("Peso")}
          />
          <input
            type="text"
            pattern="\d*"
            placeholder="Altura (cm)"
            {...register("Altura")}
          />
          <input
            type="text"
            pattern="\d*"
            placeholder="Frequência Cardíaca* (bpm)"
            {...register("FrequenciaCardiaca")}
          />
          <span>*Deixar em branco se não souber</span>
          <label htmlFor="">Você está com sobrepeso?</label>
          <select name="Sobrepeso" id="" {...register("Sobrepeso")}>
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">Você fuma?</label>
          <select name="Fuma" id="" {...register("Fuma")}>
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">
            Possui quaisquer lesões ou problemas ortopédicos?
          </label>
          <select
            name="ProblemasOrtpédicos"
            id=""
            {...register("ProblemasOrtpedicos")}
          >
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">
            Seu médico aferiu uma P.A. muito alta ou muito baixa?
          </label>
          <select name="PA" id="" {...register("PA")}>
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">Possui diabéticos na família?</label>
          <select
            name="HistoricoDiabetes"
            id=""
            {...register("HistoricoDiabetes")}
          >
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">
            Pratica alguma atividade física regularmente?
          </label>
          <select name="AtividadeFísica" id="" {...register("AtividadeFisica")}>
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">
            Toma algum medicamento prescrito ou suplemento?
          </label>
          <select
            name="Medicamento/Suplemento"
            id=""
            {...register("Medicamento_Suplemento")}
          >
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">
            Seu médico lhe recomendou alguma atividade física?
          </label>
          <select
            name="RecomendacaoAtividade"
            id=""
            {...register("RecomendacaoAtividade")}
          >
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">
            Seu nível de colesterol já esteve muito alto?
          </label>
          <select name="Colesterol" id="" {...register("Colesterol")}>
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <label htmlFor="">Possui algum problema cardíaco?</label>
          <select name="Cardiaco" id="" {...register("Cardiaco")}>
            <option value="não">Não</option>
            <option value="sim">Sim</option>
          </select>
          <StyledPageButton type="submit">
            SEGUIR PARA O PAGAMENTO
          </StyledPageButton>
        </div>
        {/* <div className="pagamento" ref={pgto}>
          <h3>Pagamento</h3>
          <p>
            Você está a um passo de fazer parte do Carlos Ferreira Team e
            conquistar o melhor físico da sua vida.
          </p>
          <p>Para concluir, clique no botão abaixo.</p>
          <StyledPageButton onClick={(e) => handleClick(e)}>
            PAGAMENTO
          </StyledPageButton>
        </div> */}
      </form>
    </StyledForm>
  );
};
