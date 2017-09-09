import { Usuario } from './usuario.model';

export const USUARIOS: Usuario[] = [
    {
        cd: 1,
        nome: 'Marcos Oliveira',
        email: 'marcosf63@gmail.com',
        senha: 'senha',
        tipo: 'Administrador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto1.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'NA',
        plano: undefined
    },
    {
        cd: 2,
        nome: 'Maria da Silva',
        email: 'maria@mail.com',
        senha: 'senha',
        tipo: 'Prestador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto2.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'S',
        plano: {
            cd: 1,
            nome: 'PF1',
            descricao: 'Plano Pessoa Física 1 serviço',
            periodicidade: 'Mensal',
            valor: 19.90
        }

    },
    {
        cd: 3,
        nome: 'Carlos Silva',
        email: 'csilva@mail.com',
        senha: 'senha',
        tipo: 'Prestador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto3.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'NA',
        plano: {
            cd: 2,
            nome: 'PF2',
            descricao: 'Plano Pessoa Física 2 serviço',
            periodicidade: 'Mensal',
            valor: 22.90
        }
    },
    {
        cd: 4,
        nome: 'Jose Sousa',
        email: 'sousa@mail.com',
        senha: 'senha',
        tipo: 'Consumidor',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto4.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'NA',
        plano: undefined
    },
    {
        cd: 5,
        nome: 'Ana Paula',
        email: 'apaila@mail.com',
        senha: 'senha',
        tipo: 'Prestador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto4.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'S',
        plano: {
            cd: 3,
            nome: 'PF3',
            descricao: 'Plano Pessoa Física 3 serviço',
            periodicidade: 'Mensal',
            valor: 24.90
        }
    },
    {
        cd: 6,
        nome: 'Joao Matos',
        email: 'jmatos3@mail.com',
        senha: 'senha',
        tipo: 'Consumidor',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto3.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'NA',
        plano: undefined
    },
    {
        cd: 7,
        nome: 'Julio Cesar',
        email: 'julocesar@mail.com',
        senha: 'senha',
        tipo: 'Prestador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto1.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'S',
        plano: {
            cd: 3,
            nome: 'PF3',
            descricao: 'Plano Pessoa Física 3 serviço',
            periodicidade: 'Mensal',
            valor: 24.90
        }
    },
    {
        cd: 8,
        nome: 'Pitagoras de Samos',
        email: 'pitagoras@mail.com',
        senha: 'senha',
        tipo: 'Prestador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto2.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'N',
        plano: {
            cd: 3,
            nome: 'PF3',
            descricao: 'Plano Pessoa Física 3 serviço',
            periodicidade: 'Mensal',
            valor: 24.90
        }
    },
    {
        cd: 9,
        nome: ' Marcelo Santos',
        email: 'marcelo@mail.com',
        senha: 'senha',
        tipo: 'Consumidor',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto4.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'S',
        plano: undefined
    },
    {
        cd: 10,
        nome: 'Julia Silva',
        email: 'jsilva@mail.com',
        senha: 'senha',
        tipo: 'Prestador',
        endereco: 'Rua 1 casa 6, Centro',
        cidade: 'Sobral',
        cep: '62.040-750',
        telefoneFixo1: '88-3677-1407',
        telefoneFixo2: '88-3611-1111',
        celuliar1: '99999-99999',
        celular2: '',
        foto: '/assets/foto1.PNG',
        situacao: 'ativo',
        in_pagamento_em_dia: 'S',
        plano: {
            cd: 3,
            nome: 'PF3',
            descricao: 'Plano Pessoa Física 3 serviço',
            periodicidade: 'Mensal',
            valor: 24.90
        }
    }
];