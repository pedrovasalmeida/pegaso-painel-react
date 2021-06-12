import firebase from 'firebase/app';
import 'firebase/firestore';

import { v4 as uuid } from 'uuid';
import { ICreateEnterprise } from '../types/IEnterprise';
import { IServiceReturn } from '../types/IServiceReturn';

export async function createEnterprise(data: ICreateEnterprise) {
  try {
    const dataFb = await firebase.firestore().collection('enterprises').get();

    const enterprises = dataFb.docs.map((doc) => doc.data());

    /** Percorre todos os documentos pegando o displayOrder em ordem crescente*/
    const enterprisesDisplayOrder: number[] = enterprises
      .map((ent) => ent.displayOrder)
      .sort((a, b) => a - b);

    const displayOrder = enterprisesDisplayOrder.pop()! + 1 || 1;

    const enterpriseData = {
      id: uuid(),
      name: data.name,
      description: data.description,
      shortDescription: data.shortDescription,
      address: data.address,
      banner: data.banner,
      displayOrder,
      images: [],
      createdAt: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'numeric',
        year: 'numeric',
      }),
      updatedAt: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'numeric',
        year: 'numeric',
      }),
    };

    await firebase
      .firestore()
      .collection('enterprises')
      .doc(enterpriseData.id)
      .set(enterpriseData);

    return {
      status: 200,
      message: 'Obra criada com sucesso',
      errorCode: null,
    } as IServiceReturn;
  } catch {
    return {
      status: 400,
      message: 'Houve um problema ao criar a obra',
      errorCode: 'cannot.create.enterprise',
    } as IServiceReturn;
  }
}
