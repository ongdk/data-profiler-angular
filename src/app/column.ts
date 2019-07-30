export class CrossTab{
	"against":string;
	"entries": [];
}

export class NumericStats{
	"count":number;
	"mean":number;
	"stddev":number;
	"min":number;
	"max":number;
	"correlations":[];
}

export class Stat{
	"code_length":string;
	"class_count": [];
	"cross_tabs": CrossTab[];
    "average_num_ent": number;
    "earliest":string;
    "latest":string;
    "percentiles":[];
    "numeric_stats":NumericStats;
}

export class Column{
  "name": string;
  "count": number;
  "invalid_data": number;
  "type": string;
  "stats": Stat;
}