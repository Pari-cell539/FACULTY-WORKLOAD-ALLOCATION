  import java.util.*;

class Faculty {
    String name;
    int workload; // current workload

    Faculty(String name, int workload) {
        this.name = name;
        this.workload = workload;
    }
}

public class FacultyWorkloadAllocation {

    public static void main(String[] args) {

        // Sample faculty list
        List<Faculty> facultyList = new ArrayList<>();
        facultyList.add(new Faculty("Dr. A", 10));
        facultyList.add(new Faculty("Dr. B", 5));
        facultyList.add(new Faculty("Dr. C", 8));
        facultyList.add(new Faculty("Dr. D", 3));

        // Task workload to assign
        int[] tasks = {4, 6, 2, 5};

        // Greedy: sort faculty by minimum workload
        facultyList.sort(Comparator.comparingInt(f -> f.workload));

        System.out.println("Task Allocation (Greedy Approach):\n");

        for (int i = 0; i < tasks.length; i++) {
            Faculty f = facultyList.get(i % facultyList.size());
            f.workload += tasks[i];

            System.out.println("Task " + (i + 1) +
                    " assigned to " + f.name +
                    " | New Workload: " + f.workload);
        }
    }
}
