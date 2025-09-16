package prjExerciciosForLoop;
import java.util.Scanner;

public class Idades {

	public static void main(String[] args) {
		Scanner ler = new Scanner(System.in);
		int i, idade;
		double altura, peso, pctPeso, mediaAltura;
		int velha = 0;
		int nova = 0;
		int idadeSuperior = 0;
		double pesoInferior = 0;
		double totalAltura = 0;

		
		for(i=1; i<=25; i++) {
			System.out.println("Entre com a IDADE da "+i+"ª pessoa");
			idade = ler.nextInt();

			if(i == 1) {
				velha = idade;
				nova = idade;
			}
			
			if(idade >= 50){
				idadeSuperior++;
			}
			
			System.out.println("Entre com a ALTURA da "+i+"ª pessoa em m");
			altura = ler.nextDouble();
			
			if(idade>=10 && idade<21) {
				totalAltura += altura;
			}
			
			System.out.println("Entre com a PESO da "+i+"ª pessoa em kg");
			peso = ler.nextDouble();
			
			
			if(peso < 40) {
				pesoInferior++;
			}
			
			if(idade > velha) {
				velha = idade;
			}
			if(idade < nova) {
				nova = idade;
			}
		}
		i--;
		mediaAltura = totalAltura/i;
		pctPeso = pesoInferior*100/i;
		System.out.println("Pessoas com mais de 50 anos: " + idadeSuperior);
		System.out.println("Média de alturas de pessoas de 10..20 anos: "+mediaAltura);
		System.out.println("Porcentagem de pessoas com peso inferior a 40kg: " + pctPeso+"%");
		System.out.println("Pessoa mais velha: "+velha);
		System.out.println("Pessoa mais nova: "+nova);
		ler.close();
	}

}
