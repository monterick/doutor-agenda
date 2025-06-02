"use client"

import * as React from "react"
import { addMonths, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ptBR } from "date-fns/locale"
import { parseAsIsoDate, useQueryState } from "nuqs"

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {

  const [from, setFrom] = useQueryState("from", parseAsIsoDate.withDefault(new Date));

  const [to, setTo] = useQueryState("to", parseAsIsoDate.withDefault(addMonths(new Date(), 1)));
    
  const date = {
    from,
    to
  }

  const handleDateSelect = (dateRange: DateRange | undefined) => {
    if(dateRange?.from){
        setFrom(dateRange.from, {
          shallow: false,
        });
    }
    if(dateRange?.to){
        setTo(dateRange.to, {
          shallow: false,
        })
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", {
                    locale: ptBR
                  })} -{" "}
                  {format(date.to, "LLL dd, y", {
                    locale: ptBR
                  })}
                </>
              ) : (
                format(date.from, "LLL dd, y", {
                    locale: ptBR
                })
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
