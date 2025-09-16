package prjExerciciosForLoop;

public class TabuadaDez {

	public static void main(String[] args) {
		int i = 1;
		int j = 1;
		int r;
		
		for(i=1; i<=10; i++) {
			for(j=1; j<=10; j++) {
				r = i*j;
				System.out.println(i+"x"+j+" = "+r);
			}
		}
	}
}

