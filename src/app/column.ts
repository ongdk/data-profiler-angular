export class DataValue{
	"name":string;
	"value":number;
}

export class Entry{
	"name":string;
	"series":DataValue[];
}

export class CrossTab{
	"against":string;
	"entries": Entry[];
}

export class NumericStats{
	"count":number;
	"mean":number;
	"stddev":number;
	"min":number;
	"max":number;
	"correlations":[];
}

export class Percentiles{
    "lower":number;
    "q1": number;
    "median": number;
    "q3": number;
    "upper": number;
    "mean": number;
    "outliers": number[];
}

export class Stat{
	"code_length":string;
	"class_count": [];
	"cross_tabs": CrossTab[];
    "average_num_ent": number;
    "earliest":string;
    "latest":string;
    "percentiles":[];
    "test_percentiles":Percentile;
    "numeric_stats":NumericStats;
}

export class Column{
  "name": string;
  "count": number;
  "invalid_data": number;
  "type": string;
  "stats": Stat;
}