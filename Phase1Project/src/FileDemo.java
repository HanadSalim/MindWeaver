import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class FileDemo {
	static int optionSelected;
	static String curDir = System.getProperty("user.dir");
	static File folder = new File(curDir);
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		welcome();
		while(true) {
			selector();
			mainMenu(optionSelected);
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
		System.out.println("************* WELCOME *************"
				+"\nFileDemo by Hanad Salim"+"\n");
		System.out.println("Select one of the following "	
				+ "\n1. List all available files"
				+ "\n2. Add, Delete or Search"
				+ "\n3. Close program");
	}

	public static void selector() {
		Scanner x = new Scanner(System.in);
		int input = x.nextInt();
		if(input==1||input==2||input==3) {
			optionSelected = input;
		}else{
			System.out.println("Select either 1,2 or 3");
			selector();
		}
	}

	public static void mainMenu(int x) {
		switch(x) {
		case 1:
			option1();
			break;
		case 2:
			option2();
			break;
		case 3:
			option3();
		}
	}

	public static void option1() {
		System.out.println("List of files stored under  "+ folder.getAbsolutePath());
		listFilesInFolder(folder);	
		try {
			Thread.sleep(1000);
		} catch (Exception e) {
			// TODO: handle exception
		}
		System.out.println("\nSelect one of the following "	
				+ "\n1. List all available files"
				+ "\n2. Add, Delete or Search"
				+ "\n3. Close program");
	}

	public static void option2() {
		System.out.println("\nSelect one of the following "	
				+ "\n1. Add"
				+ "\n2. Delete"
				+ "\n3. Search");
		selector();
		switch(optionSelected) {
		case 1:
			add();
			break;
		case 2:
			delete();
			break;
		case 3:

		}
	}

	public static void option3() {
		System.out.println("************* Program terminated *************");
		System.exit(0);
	}

	public static void add() {
		System.out.println("\nPlease enter file name");
		Scanner x = new Scanner(System.in);
		String input = x.next();
		File file = new File(curDir+"/"+input+".txt");
		try {
			file.createNewFile();
			System.out.println("file succesfully created");

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("\nSelect one of the following "	
				+ "\n1. List all available files"
				+ "\n2. Add, Delete or Search"
				+ "\n3. Close program");
		selector();
		mainMenu(optionSelected);
	}

	public static void delete() {
		System.out.println("\nPlease enter file name to delete");
		Scanner x = new Scanner(System.in);
		String input = x.next();
		File files[] = folder.listFiles();
		for(File dFile : files) {
			if(!dFile.isDirectory()&&dFile.getName().charAt(0)!='.') {
				if((input+".txt").equals(dFile.getName())) {
					if(dFile.delete()){
						System.out.println("Delete done");
					}
				}
			}
		}
		System.out.println("\nSelect one of the following "	
				+ "\n1. List all available files"
				+ "\n2. Add, Delete or Search"
				+ "\n3. Close program");
		selector();
		mainMenu(optionSelected);
	}

	public static void search() {

	}
}
