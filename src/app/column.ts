export class CrossTab{
	"against":string;
	"entries": [];
}

export class Stat{
	"code_length":string;
	"class_count": [];
	"cross_tabs": CrossTab[];
}

export class Column{
  "name": string;
  "count": number;
  "invalid_data": number;
  "type": string;
  "stats": Stat;
}