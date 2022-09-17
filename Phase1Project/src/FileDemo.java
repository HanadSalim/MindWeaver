import java.io.File;
import java.util.Scanner;

public class FileDemo {
	static int optionSelected;
	static String curDir = System.getProperty("user.dir");
	static File folder = new File(curDir);
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		welcome();
		selector();
		switch(optionSelected) {
		case 1:
			System.out.println("Reading files under the folder "+ folder.getAbsolutePath());
			listFilesInFolder(folder);
			break;
		case 2:
			System.out.println("Show other options");
			break;
		}
	}

	private static void listFilesInFolder(File folder) {
		// TODO Auto-generated method stub
		for(File fileEntry: folder.listFiles()) {
			if(fileEntry.isFile()) {
				String fileName = fileEntry.getName();
				if(fileName.contains(".")&&(fileName.charAt(0)!='.')) {
					System.out.println(fileName);
				}

			}
		}
	}

	public static void welcome() {
		System.out.println("******* WELCOME *******"
		+"\nFileDemo by Hanad Salim"+"\n");
		System.out.println("Select one of the following "	
				+ "\n1. List all available files"
				+ "\n2. Add, Delete or Search");
	}
	public static void selector() {
		Scanner x = new Scanner(System.in);
		int input = x.nextInt();
		optionSelected = input;
	}
}
