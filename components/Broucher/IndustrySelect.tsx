import { useForm } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Adjust import based on your library

function IndustrySelect() {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Select Industry *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="- Select -" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {industries.map((group) => (
                  <div key={group.category}>
                    {/* Main category as a non-selectable header */}
                    <div className="px-2 py-1 text-sm font-semibold text-blue-700 bg-gray-100 cursor-default">
                      {group.category}
                    </div>
                    {/* Subcategories as selectable items */}
                    {group.subcategories.map((subcategory) => (
                      <SelectItem key={subcategory} value={subcategory}>
                        {subcategory}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}

export default IndustrySelect;

// Data structure (as defined above)
const industries = [
  {
    category: "INDUSTRIAL PRODUCTS",
    subcategories: [
      "Building Technology & Smart Infrastructure",
      "Electrical Instrumentation & Controls",
      "Industrial Machinery",
      "Power & Utilities",
    ],
  },
  {
    category: "MEDICAL AND LIFE SCIENCE",
    subcategories: [
        "Medical Devices", 
        "Biotechnology", 
        "Pharmaceuticals"
    ],
  },{
    category: "Plant Engineering",
    subcategories: [
        "Chemicals", 
        "Customer Packaged Goods", 
        "Discrete",
        "Oil & Gas",
    ],
  },{
    category: "Telecom & Hitech",
    subcategories: [
        "Consumer Electronics", 
        "Media & Entertainment", 
        "Metaverse",
        "Semiconductors",
        "Software Products & Platforms  ",
        "Telecom OEM's",
    ],
  },{
    category: "Transportation",
    subcategories: [
        "2/3 Wheelers & Powerpoint", 
        "Aerospace & Defense", 
        "Airline",
        "Automotive",
        "Commerical Vehicles  ",
        "Of-highway Vehicles & Equipment",
        "Railway",
        "UAV/UAM",
        "Others",
    ],
  },
];
